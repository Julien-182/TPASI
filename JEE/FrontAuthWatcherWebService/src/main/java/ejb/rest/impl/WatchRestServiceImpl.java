package ejb.rest.impl;

import ejb.ejb.MessageReceiverSyncLocal;
import ejb.ejb.MessageSenderLocal;
import ejb.model.Role;
import ejb.model.User;
import ejb.rest.WatcherRestService;

import javax.ejb.EJB;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;

public class WatchRestServiceImpl implements WatcherRestService {

    @Inject
    MessageSenderLocal sender;

    @Inject
    MessageReceiverSyncLocal receiver;

    @Override
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response Authenticate(User user){
        Response.ResponseBuilder builder;

        sender.sendMessage(user);
        System.out.println(user.toString());

        User receive = receiver.receiveMessage();

        HashMap map = new HashMap();
        map.put("login", receive.getLogin());
        map.put("validAuth", receive.getValidAuth());
        map.put("role", receive.getRole());

        if (receive.getValidAuth()){
            builder = Response.status(Response.Status.FORBIDDEN).entity(map);
        }
        else {
            builder = Response.ok(map, MediaType.APPLICATION_JSON);
        }

        return builder.build();
    }

}
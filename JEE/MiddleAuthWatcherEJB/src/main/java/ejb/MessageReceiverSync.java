package ejb;

import ejb.ejb.MessageReceiverSyncLocal;
import ejb.model.User;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.Queue;

@Stateless
public class MessageReceiverSync implements MessageReceiverSyncLocal {

    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/watcherqueue")
    Queue queue;

    @Override
    public User receiveMessage(){
        return context.createConsumer(queue).receiveBody(User.class, 1000);
    }
}

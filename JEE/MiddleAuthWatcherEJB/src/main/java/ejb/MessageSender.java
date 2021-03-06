package ejb;

import ejb.ejb.MessageSenderLocal;
import ejb.model.User;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.Topic;
import javax.annotation.Resource;

@Stateless
public class MessageSender implements MessageSenderLocal {

    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/watcherAuthJMS")
    Topic topic;

    @Override
    public void sendMessage(String message){
        context.createProducer().send(topic, message);
    }

    @Override
    public void sendMessage(User user){
        context.createProducer().send(topic, user);
    }
}

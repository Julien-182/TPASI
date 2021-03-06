package ejb;

import ejb.ejb.MessageSenderQueueLocal;
import ejb.model.User;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.ObjectMessage;
import javax.jms.Queue;

@Stateless
public class MessageSenderQueue implements MessageSenderQueueLocal {

    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/watcherqueue")
    Queue queue;

    public void sendMessage(String message) {
        context.createProducer().send(queue, message);
    }

    public void sendMessage(User user) {
        try {
            ObjectMessage message = context.createObjectMessage();
            message.setObject(user);
            context.createProducer().send(queue, user);
        } catch (JMSException e) {

            e.printStackTrace();
        }
    }
}

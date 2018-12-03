package ejb.ejb;

import ejb.model.User;

import javax.ejb.Local;

@Local
public interface MessageSenderQueueLocal {

    void sendMessage(String message);

    void sendMessage(User user);
}

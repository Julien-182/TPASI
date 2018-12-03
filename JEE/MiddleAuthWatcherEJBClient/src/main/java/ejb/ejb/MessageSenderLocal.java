package ejb.ejb;

import ejb.model.User;

import javax.ejb.Local;

@Local
public interface MessageSenderLocal {

    public void sendMessage(String message);

    public void sendMessage(User user);
}

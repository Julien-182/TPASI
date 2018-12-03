package ejb.ejb;

import ejb.model.User;

import javax.ejb.Local;

@Local
public interface MessageReceiverSyncLocal {

    public User receiveMessage();
}

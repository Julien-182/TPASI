package ejb.model;

import ejb.data.UserRepository;

import javax.inject.Inject;

public class DataContainer {

    @Inject
    UserRepository userRepository;

    public Role checkUser (User user){
        return userRepository.FindByCredentials(user.getLogin(), user.getPwd()).getRole();
    }
}

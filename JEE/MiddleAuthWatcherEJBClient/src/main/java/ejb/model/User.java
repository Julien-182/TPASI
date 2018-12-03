package ejb.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;


@Entity
@Table(name="Users")
public class User implements Serializable {

    @GeneratedValue
    @Id
    private Long id;

    @NotNull
    private String Login;
    @NotNull
    private String Pwd;
    @Column(name = "roleUser")
    private Role Role;
    private Boolean ValidAuth;

    public User(String login, String pwd, Role role, Boolean validAuth) {
        Login = login;
        Pwd = pwd;
        Role = role;
        ValidAuth = validAuth;
    }

    public User(){

    }

    public String getLogin() {
        return Login;
    }

    public void setLogin(String login) {
        Login = login;
    }

    public String getPwd() {
        return Pwd;
    }

    public void setPwd(String pwd) {
        Pwd = pwd;
    }

    public String toString() {
        return "User" + Login;
    }

    public Role getRole() {
        return Role;
    }

    public void setRole(Role role) {
        Role = role;
    }

    public Boolean getValidAuth() {
        return ValidAuth;
    }

    public void setValidAuth(Boolean validAuth) {
        this.ValidAuth = validAuth;
    }
}

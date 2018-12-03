package ejb.data;

import ejb.model.User;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@Stateless
public class UserRepository {

    @PersistenceContext
    EntityManager em;

    public User FindByCredentials(String login, String pwd){
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> from = cq.from(User.class);

        // critères de recherche
        cq.select(from).where(cb.equal(from.get("login"), login));
        cq.select(from).where(cb.equal(from.get("password"), pwd));

        return em.createQuery(cq).getSingleResult();
    }
}

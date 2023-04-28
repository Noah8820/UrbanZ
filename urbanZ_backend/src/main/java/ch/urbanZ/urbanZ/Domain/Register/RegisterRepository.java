package ch.urbanZ.urbanZ.Domain.Register;

import ch.urbanZ.urbanZ.Domain.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<User, String > {

}
package ch.urbanZ.urbanZ.Domain.User;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import org.apache.catalina.User;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@EntityScan
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select u from User u where upper(u.email) = upper(?1)")
    Optional<User> findUserByEmail(String email);
}


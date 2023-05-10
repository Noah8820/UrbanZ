package ch.urbanZ.urbanZ.Domain.Register;

import ch.urbanZ.urbanZ.Domain.User.User;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@EntityScan
@Repository
public interface RegisterRepository extends JpaRepository<UserDto, Long> {
}
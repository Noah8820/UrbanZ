package ch.urbanZ.urbanZ.Domain.Role;


import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@EntityScan
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
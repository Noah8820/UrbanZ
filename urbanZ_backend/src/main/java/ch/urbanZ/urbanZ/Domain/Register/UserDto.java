package ch.urbanZ.urbanZ.Domain.Register;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;

    private String email;
    private String password;

    public UserDto(String email, String password) {
        this.email = email;
        this.password = password;

    }
}

package ch.urbanZ.urbanZ.Domain.Login;

import ch.urbanZ.urbanZ.Domain.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public User loginUser(String email, String password) throws Exception {
        User user = loginRepository.findByEmail(email);
        if (user == null || !user.getPassword().equals(password)) {
            throw new Exception("Invalid email or password");
        }
        return user;
    }
}
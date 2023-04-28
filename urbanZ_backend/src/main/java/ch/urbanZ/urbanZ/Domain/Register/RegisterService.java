package ch.urbanZ.urbanZ.Domain.Register;

import ch.urbanZ.urbanZ.Domain.User.User;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    private final RegisterRepository registerRepository;

    public RegisterService(RegisterRepository registerRepository) {
        this.registerRepository = registerRepository;
    }

    public void registerUser(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        registerRepository.save(user);
    }
}



package ch.urbanZ.urbanZ.Domain.Authority;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthorityService {
    @Autowired
    private final AuthorityRepository authorityRepository;

}
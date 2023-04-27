package ch.urbanZ.urbanZ.Domain.Clothing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothingService {
    @Autowired
    ClothingRepository clothingRepository;


    public List<Clothing> getAllClothing() {
        return clothingRepository.findAll();
    }

    public Clothing getClothingById(int Id) {
        return clothingRepository.findById(Id).orElseThrow();
    }

    public void addClothing(Clothing clothing) {
        clothingRepository.save(clothing);
    }

    public void updateClothing(int Id, Clothing clothing) {
        clothingRepository.save(clothing);
    }

    public void deleteClothing(int Id) {
        clothingRepository.deleteById(Id);
    }

}



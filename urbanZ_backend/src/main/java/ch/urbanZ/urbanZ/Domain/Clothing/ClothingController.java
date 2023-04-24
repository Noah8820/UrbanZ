package ch.urbanZ.urbanZ.Domain.Clothing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@Log4j2
@RestController
@RequestMapping("/urbanZ")

public class ClothingController {



        @Autowired
        ClothingService clothingService;
        @GetMapping("/")
        public ResponseEntity<List<Clothing>> getAllClothing(){
            return ResponseEntity.ok().body(clothingService.getAllClothing());
        }

        @GetMapping("/{id}")
        public ResponseEntity<Clothing> getclothingById(@PathVariable("id") Integer id) {
            return ResponseEntity.ok().body(clothingService.getClothingById(id));
        }
        @PostMapping("/")
        public void postClothing(@Valid @RequestBody Clothing clothing) {
            log.info("\n\nCreating new rank in the database\n");
            clothingService.addClothing(clothing);
        }
        @PutMapping("/{Id}")
        public void updateClothing(@Valid @PathVariable("Id") int Id, @RequestBody Clothing clothing) {
            log.info("\n\nUpdating clothing with ID: " + Id + " in the database\n");
            clothingService.updateClothing(Id, clothing);
        }
        @DeleteMapping("/{Id}")
        public void deleteClothing(@Valid @PathVariable("Id") int Id) {
            clothingService.deleteClothing(Id);
        }

    }


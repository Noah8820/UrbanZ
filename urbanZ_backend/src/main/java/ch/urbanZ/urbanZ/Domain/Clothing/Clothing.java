package ch.urbanZ.urbanZ.Domain.Clothing;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@Table(name = "clothing")
public class Clothing {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "price")
    private double price;


    @Column(name = "name")
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "Number")
    private int number;
}


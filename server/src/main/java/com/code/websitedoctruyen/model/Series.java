package com.code.websitedoctruyen.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "Series")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Series {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SeriesID")
    private Long seriesID;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Author")
    private String author;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "CoverImage")
    private String coverImage;

    @Column(name = "Status")
    private String status;
}

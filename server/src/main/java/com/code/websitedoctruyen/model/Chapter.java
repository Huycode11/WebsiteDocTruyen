package com.code.websitedoctruyen.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Chapters")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ChapterID")
    private Long chapterID;

    @ManyToOne
    @JoinColumn(name = "SeriesID", nullable = false)
    private Series series;

    @Column(name = "Title")
    private String title;

    @Column(name = "ChapterNumber")
    private Integer chapterNumber;

    @Column(name = "Content", columnDefinition = "LONGTEXT")
    private String content;
}

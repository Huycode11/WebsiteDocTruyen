package com.code.websitedoctruyen.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private Long userID;

    @Column(name = "Username", unique = true, nullable = false)
    private String username;

    @Column(name = "PasswordHash", nullable = false)
    @com.fasterxml.jackson.annotation.JsonProperty("password")
    private String passwordHash;

    @Column(name = "Email", unique = true, nullable = false)
    private String email;

    @Column(name = "FullName")
    private String fullName;

    @Column(name = "RoleID")
    private Integer roleID;
}

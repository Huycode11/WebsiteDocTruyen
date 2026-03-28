package com.code.websitedoctruyen.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class DatabaseCleanupRunner implements CommandLineRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void run(String... args) throws Exception {
        try {
            System.out.println("Cleaning up accidental 'Password' column...");
            jdbcTemplate.execute("ALTER TABLE Users DROP COLUMN Password");
            System.out.println("Column 'Password' dropped successfully.");
        } catch (Exception e) {
            System.out.println("Note: Could not drop 'Password' column (it might not exist or already been dropped): " + e.getMessage());
        }
    }
}

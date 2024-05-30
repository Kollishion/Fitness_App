package com.fitness.controller;

import com.fitness.beans.Admin;
import com.fitness.beans.Exercise;
import com.fitness.beans.Product;
import com.fitness.beans.Review;
import com.fitness.beans.UserDTO;
import com.fitness.beans.UserOrderDetails;
import com.fitness.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admins")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/getAll")
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Integer id) {
        return adminService.getAdminById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/admin/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Integer id, @RequestBody Admin adminDetails) {
        return ResponseEntity.ok(adminService.updateAdmin(id, adminDetails));
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Integer id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> authenticateAdmin(@RequestBody Admin loginRequest) {
        try {
            Admin authenticatedAdmin = adminService.authenticate(loginRequest.getAdminEmail(), loginRequest.getAdminPassword());
            // Generate a fake token for demonstration purposes
            String fakeToken = "fake-admin-token";
            Map<String, String> response = new HashMap<>();
            response.put("token", fakeToken);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }
    }

    @GetMapping("/exercise/getAll")
    public List<Exercise> getAllExercises() {
        return adminService.getAllExercises();
    }

    @GetMapping("/reviews/getAll")
    public List<Review> getAllReviews() {
        return adminService.getAllReviews();
    }

    @GetMapping("/orders/getAll")
    public List<UserOrderDetails> getAllOrders() {
        return adminService.getAllOrders();
    }

    @GetMapping("/users/getAll")
    public List<UserDTO> getAllUsers() {
        return adminService.getAllUsers();
    }

    @PostMapping("/users/delete/{userId}")
    public void deleteUser(@PathVariable Integer userId) {
        adminService.deleteUserById(userId);
    }

    @PostMapping("/products/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product newProduct = adminService.addProduct(product);
        return ResponseEntity.ok(newProduct);
    }

    @PostMapping("/products/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productId, @RequestBody Product productDetails) {
        Product updatedProduct = adminService.updateProduct(productId, productDetails);
        return ResponseEntity.ok(updatedProduct);
    }

    @PostMapping("/{productId}")
    public ResponseEntity<Void> removeProduct(@PathVariable Long productId) {
        adminService.removeProduct(productId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/products/getAll")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = adminService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products/get/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Product product = adminService.getProductById(productId);
        return ResponseEntity.ok(product);
    }
}

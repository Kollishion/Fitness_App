package com.fitness.service;

import com.fitness.beans.Admin;
import com.fitness.beans.Exercise;
import com.fitness.beans.Product;
import com.fitness.beans.Review;
import com.fitness.beans.User;
import com.fitness.beans.UserDTO;
import com.fitness.beans.UserOrderDetails;
import com.fitness.repository.AdminRepository;
import com.fitness.repository.ExerciseRepository;
import com.fitness.repository.ProductRepository;
import com.fitness.repository.ReviewRepo;
import com.fitness.repository.UserOrderDetailsRepo;
import com.fitness.repository.UserRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(Integer adminId) {
        return adminRepository.findById(adminId);
    }

    public Admin addAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Integer adminId, Admin adminDetails) {
        Admin admin = adminRepository.findById(adminId).orElseThrow(() -> new RuntimeException("Admin not found with id " + adminId));
        admin.setAdminEmail(adminDetails.getAdminEmail());
        admin.setAdminPassword(adminDetails.getAdminPassword());
        return adminRepository.save(admin);
    }

    public void deleteAdmin(Integer adminId) {
        Admin admin = adminRepository.findById(adminId).orElseThrow(() -> new RuntimeException("Admin not found with id " + adminId));
        adminRepository.delete(admin);
    }
    
    @Autowired
    private ExerciseRepository exerciseRepository;

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }
    
    @Autowired
    private ReviewRepo reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
    
    @Autowired
    private UserOrderDetailsRepo orderRepository;

    public List<UserOrderDetails> getAllOrders() {
        return orderRepository.findAll();
    }
    
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public Optional<UserDTO> getUserById(Integer id) {
        return userRepository.findById(id).map(this::convertToDTO);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setUserId(user.getUser_id());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setPremium(user.getPremium());
        return dto;
    }
    
    @Transactional
    public void deleteUserById(Integer userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
        } else {
            throw new IllegalArgumentException("User not found with id: " + userId);
        }
    }
    
    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long productId, Product productDetails) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setProductName(productDetails.getProductName());
            product.setCategory(productDetails.getCategory());
            product.setPrice(productDetails.getPrice());
            product.setDescription(productDetails.getDescription());
            product.setImageUrl(productDetails.getImageUrl());
            return productRepository.save(product);
        } else {
            // Handle the case where the product is not found
            throw new RuntimeException("Product not found");
        }
    }

    public void removeProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long productId) {
        return productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
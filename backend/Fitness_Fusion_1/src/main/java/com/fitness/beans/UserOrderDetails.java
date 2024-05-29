package com.fitness.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_order_details")
public class UserOrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_id;
    
    @Column(name = "u_id", nullable = false)
    private Integer userId;

    @Column(name = "timestamp", insertable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime timeStamp;

    @Column(name = "purchase_amount", nullable = false)
    private float purchaseAmount;

    // Getters and Setters
    public Integer getOrder_id() {
        return order_id;
    }
    
    @Column(name = "product_ids")
    private String product_ids;

    public void setOrder_id(Integer order_id) {
        this.order_id = order_id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public float getPurchaseAmount() {
        return purchaseAmount;
    }

    public void setPurchaseAmount(float purchaseAmount) {
        this.purchaseAmount = purchaseAmount;
    }

	public String getProduct_ids() {
		return product_ids;
	}

	public void setProduct_ids(String product_ids) {
		this.product_ids = product_ids;
	}
    
}

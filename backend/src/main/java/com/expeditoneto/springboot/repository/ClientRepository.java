package com.expeditoneto.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expeditoneto.springboot.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}

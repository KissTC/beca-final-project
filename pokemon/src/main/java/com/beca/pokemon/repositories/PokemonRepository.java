package com.beca.pokemon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.beca.pokemon.models.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {

}

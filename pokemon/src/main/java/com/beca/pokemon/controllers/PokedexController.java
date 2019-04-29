package com.beca.pokemon.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beca.pokemon.models.Pokemon;
import com.beca.pokemon.repositories.PokemonRepository;

@RestController
@RequestMapping("/api/v1/pokemon")
public class PokedexController {
	
	@Autowired
	private PokemonRepository pokemonRepository;
	
	@GetMapping
	public List<Pokemon> getPokemons(){
		return pokemonRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Pokemon pokemon) {
		pokemonRepository.save(pokemon);
	}
	
	@GetMapping("/{id}")
	public Pokemon getOnePokemon(@PathVariable("id") int id) {
		return pokemonRepository.getOne(id);
	}
	
}

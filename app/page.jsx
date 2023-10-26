import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
import { fetchCars } from "../utils";
import { fuels, yearsOfProduction } from "../constants";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className=' overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4x1 font-extrabold'>Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar></SearchBar>
          <div className='home__filter-container'>
            <CustomFilter title='fuel'></CustomFilter>
            <CustomFilter title='year'></CustomFilter>
          </div>
        </div>


        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}

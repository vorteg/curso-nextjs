import { useState } from 'react';

import { Card, Grid, Text, Button, Container, Image } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces/pokemon-full';
import { localFavorites } from '../../utils';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import { getPokemonInfo } from '../../utils/getPokemonInfo';


interface Props {
    pokemon: Pokemon;

}


const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const [isInfavorites, setIsInfavorites] = useState(localFavorites.existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInfavorites(!isInfavorites);

        if (!isInfavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    }
    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height={200} />
                    </Card.Body>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Button
                                color="gradient"
                                ghost={!isInfavorites}
                                onClick={onToggleFavorite}
                            >
                                {isInfavorites ? 'En Favoritos' : 'Guardar en favoritos'}

                            </Button>

                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>

                    </Card>

                </Grid>


            </Grid.Container>

        </Layout>
    )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);

    return {
        paths: pokemonNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };


    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}
export default PokemonByNamePage
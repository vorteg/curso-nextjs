import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';



export const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)

    }, []);


    return (
        <Layout title='Pokemons - Favorites'>

            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                        <FavoritePokemons pokemons={favoritePokemons} />
                    )
            }


        </Layout>
    )
}

export default FavoritesPage;
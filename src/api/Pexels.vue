<script lang="ts">
import { DataResult, Data } from '../Interfaces'

const auth = "563492ad6f91700001000001647b4227b11544b1885d32353a50aba8";
const domain = "https://api.pexels.com/v1"
const initUrl = `${domain}/curated?page=1&per_page=15`;
let nextPageUrl = ""

export const getDefaultPictures = async () => {
    return await search(initUrl);
}

export const getSearchPictures = async (searchWord: string) => {
    return await search(`${domain}/search?query=${searchWord}&per_page=15&page=1`);
}

export const getMorePictures = async (): Promise<Data[]> => {
    return get(nextPageUrl);
}

export const search = async (url: string): Promise<Data[]> => {
    return get(url);
};

const get = async (url: string): Promise<Data[]> => {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth,
        },
    });
    const dataResult: DataResult = await dataFetch.json();
    nextPageUrl = dataResult.next_page;
    return dataResult.photos;
}

export default { getDefaultPictures, getSearchPictures, getMorePictures }
</script>


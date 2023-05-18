import React, { useEffect, useState } from 'react';
import { useMarvelShowQuery } from '../../api/api';
import { useRouter } from 'next/router';
import ShowItemDetails from '@/components/ShowItemDetails';
import Layout from '../../components/Layout';
const Show = () => {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState()
    const {isLoading, data, error} = useMarvelShowQuery(Number(id));
    useEffect(() => {
        if(data) {
            setItem(data);
            setLoading(false);
        }
    }, [isLoading, data, error]);
    return <Layout><ShowItemDetails item={item} loading={loading}/></Layout> 
};

export default Show;
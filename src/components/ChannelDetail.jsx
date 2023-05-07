import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = ({marginTop}) => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    const {id} = useParams()

    console.log(channelDetail, videos)

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then(data => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then(data => setVideos(data?.items))
    }, [id])

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                background: 'linear-gradient(85deg, rgba(42,121,181,1) 0%, rgba(64,208,192,1) 100%)', zIndex: 10, height: '300px'}}/>

                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
                <Box display='flex' p='2'>
                    <Box  />
                    <Videos videos={videos} />
                </Box>
            </Box>
        </Box>
    )
}

export default ChannelDetail
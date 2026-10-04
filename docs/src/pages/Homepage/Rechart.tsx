import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { dummyApiThunk, getUsers } from './usersSlice'

const RechartBarChart: React.FC = () => {
    const users = useSelector(getUsers);
    const dispatchApi = useDispatch();

    useEffect(() => {
        dispatchApi(dummyApiThunk())
    }, [dispatchApi])

    //code from the Rechart.js NPM package:
    const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
    const [locked, setLocked] = useState<boolean>(false);

    const onLegendMouseEnter = (payload: any) => {
        if (!locked) {
            setFocusedDataKey(String(payload.dataKey))
        }
    }

    const onLegendMouseOut = () => {
        if (!locked) {
            setFocusedDataKey(null)
        }
    }

    const onLegendClick = (payload: any) => {
        if (focusedDataKey === String(payload.dataKey)) {
            if (locked) {
            setFocusedDataKey(null)
            setLocked(false)
            } else {
            setLocked(true)
            }
        } else {
            setFocusedDataKey(String(payload.dataKey))
            setLocked(true);
        }
    }

    return (
        <BarChart
              style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
              responsive
              data={users}
                margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="address.geo.lat" width="auto" />
            <Tooltip />
            <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
            <Bar dataKey="address.geo.lat" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'address.geo.lat' ? '#8884d8' : '#eee'} />
            <Bar dataKey="address.zipcode" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'address.zipcode' ? '#82ca9d' : '#eee'} />
            <Bar dataKey="address.geo.lng" fill={focusedDataKey == null || focusedDataKey === 'address.geo.lng' ? '#ffc658' : '#eee'} />
        </BarChart>
    )
}

export default RechartBarChart
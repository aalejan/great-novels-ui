import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Novel from './Novel'
import Search from './Search'

export default () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [novelsList, setNovelsList] = useState([])
    const [filteredNovelsList, setFilteredNovelsList] = useState([])
}
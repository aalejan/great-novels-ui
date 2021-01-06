import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Novel from './Novel'
import Search from './Search'

export default () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [novelsList, setNovelsList] = useState([])
    const [filteredNovelsList, setFilteredNovelsList] = useState([])

    useEffect(() => {
        async function pullData() {
          const { data } = await axios.get('http://localhost:1337/api/novels')
    
          setNovelsList(data)
          setFilteredNovelsList(data)
        }
    
        pullData()
      }, [searchTerm])

      useEffect(() => {
        const filtered = novelsList.filter(novel => (
          novel.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    
        setFilteredNovelsList(filtered)
      }, [searchTerm])

      return (
        <div className="page">
          <div className="title">Great Novels</div>
          <Search term={searchTerm} setter={setSearchTerm} />
          {
            filteredNovelsList.map(novel => (<Novel key={novel.id} title={novel.title} />))
          }
        </div>
      )
    
}
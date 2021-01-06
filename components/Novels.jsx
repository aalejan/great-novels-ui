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

      return (
        <div className="page">
          <div className="title">Great Novels</div>
          <input type="text" name="search" onChange={event => setSearchTerm(event.target.value)} />
          {
            novelsList.map(novel => (<div key={novel.id}>{`${novel.title}`}</div>))
          }
        </div>
      )
    
}
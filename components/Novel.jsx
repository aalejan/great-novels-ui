import React from 'react'
const models = require('../models/authors')

export default ({ id, title, authorId}) => (
  <div className='novel-title' key={id}>{`${title}`} By {[authorId]} </div>
)
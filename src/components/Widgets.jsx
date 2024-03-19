import React from 'react'
import "./Widgets.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Lok shaba polls to begin on April 19", "Top news - 149 readers")}
            {newsArticle("New Skills for boardrooms", "1d ago-204 readers")}
            {newsArticle("Top newsletters of the week", "1d ago")}
            {newsArticle("Stock perks get a makeover", "1d ago")}
            {newsArticle("smaller cities turn realty hubs", "1d ago -212 readers")}



        </div>
    )
}

export default Widgets
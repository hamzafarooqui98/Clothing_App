import React from "react";
import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className='title' >{title}</h2>
      <div className='items'>
        {
          items.map( item => <CollectionItem key={item.id} item={item} /> )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ( state, ownProps ) => ({  //ownProps is the props that the component is getting (i.e match through Route)
  collection: selectCollection( ownProps.match.params.collectionId )(state)  // since the selector we made is a function within a fn n which one gets the state and another one gets the id
});

export default connect(mapStateToProps)(CollectionPage);

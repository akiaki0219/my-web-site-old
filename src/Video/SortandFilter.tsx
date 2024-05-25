import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import {useState, useEffect} from 'react';

interface SortandFilterProps {
  applySortFilter: (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[]) => void;
}

const SortandFilter: React.FC<SortandFilterProps> = ({applySortFilter}) => {
  const [order, setOrder] = useState<'latest' | 'oldest'>('latest');
  const [filterType, setFilterType] = useState<string[]>(['game', 'song', 'blog', 'shorts']);
  const [filterCharacter, setFilterCharacter] = useState<string[]>(['あっきー', '琴葉茜', '琴葉葵', '伊織弓鶴', '初音ミク', '可不']);

  const handleFilterTypeChange = (type: string) => {
    const updatedFilterType = 
      filterType.includes(type)
        ? filterType.filter(item => item !== type)
        : [...filterType, type];
    setFilterType(updatedFilterType);
  };
  const handleFilterCharacterChange = (name: string) => {
    const updatedFilterCharacter = 
      filterCharacter.includes(name)
        ? filterCharacter.filter(item => item !== name)
        : [...filterCharacter, name];
    setFilterCharacter(updatedFilterCharacter);
  };
  const handleApply = () => {
    applySortFilter(order, filterType, filterCharacter);
  };

  return (
    <div className="main-content">
      <div className="row">
        <h5>Sort & Filter Video List</h5>
      </div>
      <div className="row">
        <fieldset className="col-4">
          <legend>Sort by Date</legend>
          <div>
            <input type="radio" id="latest" name="sort" value="Latest" checked={order==='latest'} onChange={() => setOrder('latest')} />
            <label htmlFor="latest">Latest</label>
          </div>
          <div>
            <input type="radio" id="oldest" name="sort" value="Oldest" checked={order==='oldest'} onChange={() => setOrder('oldest')} />
            <label htmlFor="oldest">Oldest</label>
          </div>
        </fieldset>
        <fieldset className="col-4">
          <legend>Filter by Type</legend>
          <div>
            <input type="checkbox" id="game" name="game" checked={filterType.includes('game')} onChange={() => handleFilterTypeChange('game')} />
            <label htmlFor="game">Game</label>
          </div>
          <div>
            <input type="checkbox" id="song" name="song" checked={filterType.includes('song')} onChange={() => handleFilterTypeChange('song')}  />
            <label htmlFor="song">Song</label>
          </div>
          <div>
            <input type="checkbox" id="blog" name="blog" checked={filterType.includes('blog')} onChange={() => handleFilterTypeChange('blog')} />
            <label htmlFor="blog">Blog</label>
          </div>
          <div>
            <input type="checkbox" id="shorts" name="shorts" checked={filterType.includes('shorts')} onChange={() => handleFilterTypeChange('shorts')} />
            <label htmlFor="shorts">Shorts</label>
          </div>
        </fieldset>
        <fieldset className="col-4">
          <legend>Filter by Character</legend>
          <div>
            <input type="checkbox" id="あっきー" name="あっきー" checked={filterCharacter.includes('あっきー')} onChange={() => handleFilterCharacterChange('あっきー')} />
            <label htmlFor="あっきー">Akkiy</label>
          </div>
          <div>
            <input type="checkbox" id="琴葉茜" name="琴葉茜" checked={filterCharacter.includes('琴葉茜')} onChange={() => handleFilterCharacterChange('琴葉茜')} />
            <label htmlFor="琴葉茜">Akane</label>
          </div>
          <div>
            <input type="checkbox" id="琴葉葵" name="琴葉葵" checked={filterCharacter.includes('琴葉葵')} onChange={() => handleFilterCharacterChange('琴葉葵')} />
            <label htmlFor="琴葉葵">Aoi</label>
          </div>
          <div>
            <input type="checkbox" id="伊織弓鶴" name="伊織弓鶴" checked={filterCharacter.includes('伊織弓鶴')} onChange={() => handleFilterCharacterChange('伊織弓鶴')} />
            <label htmlFor="伊織弓鶴">Yuzuru</label>
          </div>
          <div>
            <input type="checkbox" id="初音ミク" name="初音ミク" checked={filterCharacter.includes('初音ミク')} onChange={() => handleFilterCharacterChange('初音ミク')} />
            <label htmlFor="初音ミク">Miku</label>
          </div>
          <div>
            <input type="checkbox" id="可不" name="可不" checked={filterCharacter.includes('可不')} onChange={() => handleFilterCharacterChange('可不')} />
            <label htmlFor="可不">KAFU</label>
          </div>
        </fieldset>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleApply}>Apply</button>
    </div>
  );
}

export default SortandFilter;

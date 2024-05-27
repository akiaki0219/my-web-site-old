import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Video.css';
import React, {useState, useEffect} from 'react';
import {fetchVideoTypeArray, fetchCharacterArray, fetchEngineArray} from '../utils/fetchVideoFilter';

interface SortandFilterProps {
  applySortFilter: (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]) => void;
}

const SortandFilter: React.FC<SortandFilterProps> = ({applySortFilter}) => {
  const [order, setOrder] = useState<'latest' | 'oldest'>('latest');
  const [videoType, setVideoType] = useState<string[]>([]);
  const [character, setCharacter] = useState<string[]>([]);
  const [engine, setEngine] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterCharacter, setFilterCharacter] = useState<string[]>([]);
  const [filterEngine, setFilterEngine] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchType = async () => {
      const fetchVideoTypeSet = await fetchVideoTypeArray();
      if (fetchVideoTypeSet) {
        const typeList = fetchVideoTypeSet.map((newType) => newType.name);
        setVideoType(typeList);
      }
    };
    const fetchCharacter = async () => {
      const fetchCharacterSet = await fetchCharacterArray();
      if (fetchCharacterSet) {
        const characterList = fetchCharacterSet.map((newCharacter) => newCharacter.name);
        setCharacter(characterList);
      }
    };
    const fetchEngine = async () => {
      const fetchEngineSet = await fetchEngineArray();
      if (fetchEngineSet) {
        const engineList = fetchEngineSet.map((newEngine) => newEngine.name);
        setEngine(engineList);
      }
    };
    fetchType();
    fetchCharacter();
    fetchEngine();
  }, []);
  useEffect(() => {
    if (videoType) {
      setFilterType(videoType);
    }
    if (character) {
      setFilterCharacter(character);
    }
    if (engine) {
      setFilterEngine(engine);
    }
  }, [videoType, character, engine]);
  
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
  const handleFilterEngineChange = (name: string) => {
    const updatedFilterEngine = 
      filterEngine.includes(name)
        ? filterEngine.filter(item => item !== name)
        : [...filterEngine, name];
    setFilterEngine(updatedFilterEngine);
  };
  const handleApply = () => {
    applySortFilter(order, filterType, filterCharacter, filterEngine);
  };

  return (
    <div className="video-sort-filter-list">
      <div className="row">
        <h5>Sort & Filter Video List</h5>
      </div>
      <div className="row justify-content-center">
        <fieldset className="col-2 video-form-items">
          <legend>Sort by Date</legend>
          <div>
            <input type="radio" id="latest" name="sort" value="Latest" checked={order==='latest'} onChange={() => setOrder('latest')} />
            <label className="video-form-items" htmlFor="latest">Latest</label>
          </div>
          <div>
            <input type="radio" id="oldest" name="sort" value="Oldest" checked={order==='oldest'} onChange={() => setOrder('oldest')} />
            <label className="video-form-items" htmlFor="oldest">Oldest</label>
          </div>
        </fieldset>
        <fieldset className="col-2 video-form-items">
          <legend>Filter by Type</legend>
          {videoType.map((name) =>
            <div>
            <input type="checkbox" id={name} name={name} checked={filterType.includes(name)} onChange={() => handleFilterTypeChange(name)} />
            <label className="video-form-items" htmlFor={name}>{name}</label>
            </div>
          )}
        </fieldset>
        <fieldset className="col-2 video-form-items">
          <legend>Filter by Character</legend>
          {character.map((name) =>
            <div>
            <input type="checkbox" id={name} name={name} checked={filterCharacter.includes(name)} onChange={() => handleFilterCharacterChange(name)} />
            <label className="video-form-items" htmlFor={name}>{name}</label>
            </div>
          )}
        </fieldset>
        <fieldset className="col-2 video-form-items">
          <legend>Filter by Engine</legend>
          {engine.map((name) =>
            <div>
            <input type="checkbox" id={name} name={name} checked={filterEngine.includes(name)} onChange={() => handleFilterEngineChange(name)} />
            <label className="video-form-items" htmlFor={name}>{name}</label>
            </div>
          )}
        </fieldset>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleApply}>Apply</button>
    </div>
  );
}

export default SortandFilter;

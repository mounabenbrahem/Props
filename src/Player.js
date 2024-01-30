const Player = ({ nom, equipe, nationalite, numero_maillot, age, image_url }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
        <img src={image_url} alt={nom} style={{ width: '100%' }} />
        <h2>{nom}</h2>
        <p>Equipe: {equipe}</p>
        <p>Nationalité: {nationalite}</p>
        <p>Numéro de maillot: {numero_maillot}</p>
        <p>Âge: {age}</p>
      </div>
    );
  };
  
  export default Player;
using MinTur.Domain.BusinessEntities;
using System.Collections.Generic;

namespace MinTur.DataAccessInterface.Repositories
{
    public interface IChargingPointRepository
    {
        ChargingPoint CreateChargingPoint(ChargingPoint chargingPoint);
        ChargingPoint GetChargingPointById(int chargingPointId);
        void DeleteChargingPoint (ChargingPoint chargingPointToBeDeleted);
        List<ChargingPoint> GetAllChargingPoints();
    }
}
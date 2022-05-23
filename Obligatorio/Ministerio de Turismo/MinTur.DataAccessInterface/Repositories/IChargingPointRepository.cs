using MinTur.Domain.BusinessEntities;

namespace MinTur.DataAccessInterface.Repositories
{
    public interface IChargingPointRepository
    {
        ChargingPoint CreateChargingPoint(ChargingPoint chargingPoint);
        ChargingPoint GetChargingPointById(int chargingPointId);
        void DeleteChargingPoint (ChargingPoint chargingPointToBeDeleted);
    }
}
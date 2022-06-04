using MinTur.Domain.BusinessEntities;
using System.Collections.Generic;

namespace MinTur.BusinessLogicInterface.ResourceManagers
{
    public interface IChargingPointManager
    {
        ChargingPoint Create(ChargingPoint chargingPoint);
        void DeleteChargingPointById(int chargingPointId);
        List<ChargingPoint> GetAll();
    }
}
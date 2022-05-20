using MinTur.Domain.BusinessEntities;

namespace MinTur.BusinessLogicInterface.ResourceManagers
{
    public interface IChargingPointManager
    {
        ChargingPoint Create(ChargingPoint chargingPoint);
    }
}
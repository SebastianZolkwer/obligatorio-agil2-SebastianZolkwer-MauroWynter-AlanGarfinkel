using MinTur.BusinessLogicInterface.ResourceManagers;
using MinTur.DataAccessInterface.Facades;
using MinTur.Domain.BusinessEntities;

namespace MinTur.BusinessLogic.ResourceManagers
{
    public class ChargingPointManager : IChargingPointManager
    {
        private readonly IRepositoryFacade _repositoryFacade;

        public ChargingPointManager(IRepositoryFacade repositoryFacade)
        {
            _repositoryFacade = repositoryFacade;
        }
        public ChargingPoint Create(ChargingPoint chargingPoint)
        {
            chargingPoint.Validate();

            Region region = _repositoryFacade.GetRegionById(chargingPoint.RegionId);
            chargingPoint.Region = region;

            ChargingPoint newChargingPoint = _repositoryFacade.CreateChargingPoint(chargingPoint);
            return newChargingPoint;

        }

        public void DeleteChargingPointById(int chargingPointId)
        {
            ChargingPoint chargingPointToBeDeleted = _repositoryFacade.GetChargingPointById(chargingPointId);
            _repositoryFacade.DeleteChargingPoint(chargingPointToBeDeleted);
        }
    }
}
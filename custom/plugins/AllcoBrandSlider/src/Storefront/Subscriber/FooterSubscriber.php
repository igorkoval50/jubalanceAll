<?php declare(strict_types=1);

namespace Allco\BrandSlider\Storefront\Subscriber;

use Shopware\Core\Content\Product\Aggregate\ProductManufacturer\ProductManufacturerEntity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Sorting\FieldSorting;
use Shopware\Core\Framework\Struct\ArrayEntity;
use Shopware\Storefront\Pagelet\Footer\FooterPageletLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class FooterSubscriber implements EventSubscriberInterface
{
    /**
     * @var EntityRepositoryInterface
     */
    private $manufacturerRepository;

    public function __construct(EntityRepositoryInterface $manufacturerRepository)
    {
        $this->manufacturerRepository = $manufacturerRepository;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            FooterPageletLoadedEvent::class => 'addActiveProductCount'
        ];
    }

    public function addActiveProductCount(FooterPageletLoadedEvent $event): void
    {
        $criteria = new Criteria();
        $criteria->addAssociation('media');
        $criteria->setLimit(10);
        $criteria->addSorting(new FieldSorting('name', FieldSorting::ASCENDING));
        $results = $this->manufacturerRepository->search($criteria, $event->getContext());
        $brands = [];
        /** @var  ProductManufacturerEntity $result */
        foreach ($results->getElements() as $result) {
            $mediaUrl = "";
            if ($result->getMediaId() !== null) {
                $mediaUrl = $result->getMedia()->getUrl();
            }
            array_push($brands, ['name' => $result->getName(), 'mediaUrl' => $mediaUrl, 'link' => $result->getLink()]);
        }
        $event->getPagelet()->addExtension('allco_brands', new ArrayEntity($brands));
    }
}

package ch.zhaw.techland.model.voucher;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.aggregator.ArgumentsAccessor;
import org.junit.jupiter.params.provider.CsvSource;

import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceType;

public class TwoForOneVoucherTest {

    @Test
    public void testOtherDevice() {
        var device1 = new Device("desc1", "description", DeviceType.COMPUTER, 77.0);
        var device2 = new Device("desc2", "description", DeviceType.AUDIOVIDEO, 77.0);

        var voucher = new TwoForOneVoucher(DeviceType.COMPUTER);
        var devices = new ArrayList<Device>();
        devices.add(device1);
        devices.add(device2);

        assertEquals(0, voucher.getDiscount(devices), 0.01);
    }

    @Test
    public void testSameDevice() {
        var device1 = new Device("desc1", "description", DeviceType.COMPUTER, 77.0);
        var device2 = new Device("desc2", "description", DeviceType.COMPUTER, 33.0);

        var voucher = new TwoForOneVoucher(DeviceType.COMPUTER);
        var devices = Arrays.asList(device1, device2);

        assertEquals(55, voucher.getDiscount(devices), 0.01);
    }

    @Test
    public void testThreeDevices_sameType() {
        var device1 = new Device("desc1", "description", DeviceType.COMPUTER, 77.0);
        var device2 = new Device("desc2", "description", DeviceType.COMPUTER, 33.0);
        var device3 = new Device("desc3", "description", DeviceType.COMPUTER, 99.0);

        var voucher = new TwoForOneVoucher(DeviceType.COMPUTER);
        var devices = Arrays.asList(device1, device2, device3);

        assertEquals(104.5, voucher.getDiscount(devices), 0.01);
    }

    @Test
    public void testThreeDevices_mixedType() {
        var device1 = new Device("desc1", "description", DeviceType.COMPUTER, 77.0);
        var device2 = new Device("desc2", "description", DeviceType.COMPUTER, 33.0);
        var device3 = new Device("desc3", "description", DeviceType.AUDIOVIDEO, 99.0);

        var voucher = new TwoForOneVoucher(DeviceType.COMPUTER);
        var devices = Arrays.asList(device1, device2, device3);

        assertEquals(55.0, voucher.getDiscount(devices), 0.01);
    }

    @ParameterizedTest
    @CsvSource({ "0,0", "1,0", "2,77", "3,115.5", "4,154" })
    public void testMultipleDevices(ArgumentsAccessor argumentsAccessor) {
        var voucher = new TwoForOneVoucher(DeviceType.COMPUTER);
        var device = new Device("desc", "description", DeviceType.COMPUTER, 77.0);
        var devices = new ArrayList<Device>();
        for (var i = 0; i < argumentsAccessor.getInteger(0); i++) {
            devices.add(device);
        }
        var mietpreis = argumentsAccessor.getDouble(1);
        assertEquals(mietpreis, voucher.getDiscount(devices), 0.01);
    }
}
